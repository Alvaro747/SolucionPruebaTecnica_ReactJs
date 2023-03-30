import React, { useState, useEffect } from "react";
import IconCalendar from "./icon-calendar/IconCalendar";
import IconLoock from "./icon-loock/IconLoock";
import IconMail from "./icon-mail/IconMail";
import IconMap from "./icon-map/IconMap";
import IconTelephone from "./icon-telephone/IconTelephone";

import IconUser from "./icon-user/IconUser";

function Iconsprofile({ values }: any) {
  const [isFocusItem, setisFocusItem] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const sendValues = () => {
      values(isFocusItem);
    };
    sendValues();
  }, [isFocusItem]);

  return (
    <div className="flex bg-white justify-between w-1/2">
      <div
        onClick={() => {
          setisFocusItem([!isFocusItem[0], false, false, false, false, false]);
        }}
      >
        <IconUser isFocus={isFocusItem[0]} />
      </div>

      <div
        onClick={() => {
          setisFocusItem([false, !isFocusItem[1], false, false, false, false]);
        }}
      >
        <IconMail isFocus={isFocusItem[1]} />
      </div>

      <div
        onClick={() => {
          setisFocusItem([false, false, !isFocusItem[2], false, false, false]);
        }}
      >
        <IconCalendar isFocus={isFocusItem[2]} />
      </div>

      <div
        onClick={() => {
          setisFocusItem([false, false, false, !isFocusItem[3], false, false]);
        }}
      >
        <IconMap isFocus={isFocusItem[3]} />
      </div>

      <div
        onClick={() => {
          setisFocusItem([false, false, false, false, !isFocusItem[4], false]);
        }}
      >
        <IconTelephone isFocus={isFocusItem[4]} />
      </div>

      <div
        onClick={() => {
          setisFocusItem([false, false, false, false, false, !isFocusItem[5]]);
        }}
      >
        <IconLoock isFocus={isFocusItem[5]} />
      </div>
    </div>
  );
}

export default Iconsprofile;
