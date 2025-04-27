import React from "react";

import { BubbleChart } from "src/components/bubble";

import styles from "./donate.module.css";

import { DonationForm } from "./form";
import { Button } from "src/components/ui";
import { CgClose } from "react-icons/cg";

export const DonatePage = () => {
  const [data, setData] = React.useState([
    { id: "1", name: "Apple", value: 300 },
    { id: "2", name: "Microsoft", value: 290 },
    { id: "3", name: "Amazon", value: 280 },
    { id: "4", name: "Alphabet", value: 270 },
    { id: "5", name: "Tesla", value: 260 },
    { id: "6", name: "Meta", value: 250 },
    { id: "7", name: "Berkshire", value: 240 },
    { id: "8", name: "TSMC", value: 230 },
    { id: "9", name: "Tencent", value: 220 },
    { id: "10", name: "Samsung", value: 210 },
    { id: "11", name: "Walmart", value: 200 },
    { id: "12", name: "Nvidia", value: 195 },
    { id: "13", name: "JPMorgan", value: 190 },
    { id: "14", name: "Visa", value: 185 },
    { id: "15", name: "Mastercard", value: 180 },
    { id: "16", name: "Disney", value: 175 },
    { id: "17", name: "Netflix", value: 170 },
    { id: "18", name: "Adobe", value: 165 },
    { id: "19", name: "PayPal", value: 160 },
    { id: "20", name: "Intel", value: 155 },
    { id: "21", name: "Cisco", value: 150 },
    { id: "22", name: "Oracle", value: 145 },
    { id: "23", name: "Sony", value: 140 },
    { id: "24", name: "IBM", value: 135 },
    { id: "25", name: "Toyota", value: 130 },
    { id: "26", name: "Volkswagen", value: 125 },
    { id: "27", name: "Mercedes", value: 120 },
    { id: "28", name: "BMW", value: 115 },
    { id: "29", name: "Starbucks", value: 110 },
    { id: "30", name: "McDonald's", value: 105 },
    { id: "31", name: "Nike", value: 100 },
    { id: "32", name: "Coca-Cola", value: 95 },
    { id: "33", name: "Pepsi", value: 90 },
    { id: "34", name: "UPS", value: 85 },
    { id: "35", name: "FedEx", value: 80 },
    { id: "36", name: "Boeing", value: 75 },
    { id: "37", name: "Lockheed", value: 70 },
    { id: "38", name: "SpaceX", value: 65 },
    { id: "39", name: "GE", value: 60 },
    { id: "40", name: "3M", value: 55 },
    { id: "41", name: "HP", value: 50 },
    { id: "42", name: "Dell", value: 45 },
    { id: "43", name: "Qualcomm", value: 40 },
    { id: "44", name: "AMD", value: 35 },
    { id: "45", name: "Spotify", value: 30 },
    { id: "46", name: "Uber", value: 28 },
    { id: "47", name: "Lyft", value: 26 },
    { id: "48", name: "Airbnb", value: 24 },
    { id: "49", name: "Salesforce", value: 22 },
    { id: "50", name: "Workday", value: 20 },
    { id: "51", name: "Slack", value: 19 },
    { id: "52", name: "Zoom", value: 18 },
    { id: "53", name: "TikTok", value: 17 },
    { id: "54", name: "Snapchat", value: 16 },
    { id: "55", name: "Twitter", value: 15 },
    { id: "56", name: "Pinterest", value: 14 },
    { id: "57", name: "Reddit", value: 13 },
    { id: "58", name: "EA", value: 12 },
    { id: "59", name: "Activision", value: 11 },
    { id: "60", name: "Ubisoft", value: 10 },
    { id: "61", name: "Siemens", value: 9 },
    { id: "62", name: "Philips", value: 8 },
    { id: "63", name: "Samsung Bio", value: 7 },
    { id: "64", name: "Pfizer", value: 6 },
    { id: "65", name: "Moderna", value: 5 },
    { id: "66", name: "AstraZeneca", value: 4 },
    { id: "67", name: "Novartis", value: 3 },
    { id: "68", name: "Roche", value: 2 },
    { id: "69", name: "Shell", value: 1 },
  ]);

  const [isShow, setIsShow] = React.useState(false);

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const onSubmit = (value: number, name: string) => {
    console.log(name, value);
    setData([...data, { name: name, id: data.length + 1 + "", value }]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h1 className={styles.title}>Поддержите наш проект! 💙</h1>
        <Button
          variant={isShow ? "default" : "dark"}
          onClick={() => setIsShow((prev) => !prev)}
        >
          {isShow ? "Close" : "Стать спонсором"}
        </Button>
      </div>
      <div ref={wrapperRef} className={styles.bubble}>
        <BubbleChart data={data} />
      </div>
      {isShow && (
        <div className={styles.form}>
          <div className={styles.form__head}>
            <p className={styles.form__title}>Оплата 💳</p>
            <Button variant="icon" onClick={() => setIsShow(false)}>
              <CgClose fontSize={18} />
            </Button>
          </div>
          <DonationForm onSubmit={onSubmit} />
        </div>
      )}
    </div>
  );
};
