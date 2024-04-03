// @ts-check

import cron from "node-cron";
import { PrismaClient } from "@prisma/client";
import { toDateFormat, getYesterday } from "./utils.mjs";

const db = new PrismaClient();

console.log("\x1b[34m", ">> 근무 스케줄러가 실행 중 입니다. \n");

/** @param {Date} date */
const getIsHoliyDay = (date) => date.getDay() === 6 || date.getDay() === 0;

// 무단 결근 처리
cron.schedule("0 10 * * *", async () => {
  try {
    const yesterday = getYesterday();
    const isHoliyDay = getIsHoliyDay(yesterday);

    if (isHoliyDay) return;

    const users = await db.user.findMany();

    for (const user of users) {
      const report = await db.report.findMany({
        where: {
          userId: user.id,
          date: toDateFormat(yesterday),
        },
      });

      if (report.length > 0) {
        return;
      }

      await db.report.create({
        data: {
          date: toDateFormat(yesterday),
          userId: user.id,
          status: "ABSENT",
        },
      });

      const log = `${new Date().toISOString()} [${user.name}] 사용자를 [무단 결근] 처리 했습니다.`;

      await db.log.create({
        data: { text: log },
      });
    }
  } catch (error) {}
});

// 미퇴근 처리
cron.schedule("48 8 * * *", async () => {
  try {
    const yesterday = getYesterday();
    const isHoliyDay = getIsHoliyDay(yesterday);

    if (isHoliyDay) return;

    const { count } = await db.report.updateMany({
      where: {
        date: toDateFormat(yesterday),
        startTime: {
          not: null,
        },
        endTime: null,
      },
      data: {
        status: "CONFIRM_REQUIRED",
        endTime: null,
      },
    });

    console.log(`${count}건을 미퇴근 처리 했습니다.`);
  } catch (error) {}
});
