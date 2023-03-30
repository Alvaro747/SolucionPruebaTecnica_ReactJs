import React, { useEffect, useState } from "react";

import { InterfaceUser } from "../../interface/User";
import Iconsprofile from "./Icons/Icons.profile";
import Imageprofile from "./Image/Image.profile";
import Informationprofile from "./Information/Information.profile";
import InformationAddress from "./Information/InformationAddress";
import InformationBirthday from "./Information/InformationBirthday";
import InformationCellphone from "./Information/InformationCellphone";
import InformationEmail from "./Information/InformationEmail";
import InformationPassword from "./Information/InformationPassword";

function Profile() {
  const [user, setUser] = useState<InterfaceUser | null>(null);
  const [conditionalRender, setConditionalRender] = useState([]);

  const getValue = (datos: any) => setConditionalRender(datos);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      setUser(data.results[0]);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="w-full h-36 bg-gray-100 border-b-2 flex justify-center ">
        <div className="relative top-16">
          <Imageprofile urlImage={user.picture.large} />
        </div>
      </div>
      <div className="w-full h-56 flex justify-center items-center ">
        {conditionalRender[0] && <Informationprofile name={user.name} />}
        {conditionalRender[1] && <InformationEmail email={user.email} />}
        {conditionalRender[2] && <InformationBirthday dob={user.dob} />}
        {conditionalRender[3] && (
          <InformationAddress location={user.location} />
        )}
        {conditionalRender[4] && (
          <InformationCellphone cell={user.cell} />
        )}
        {conditionalRender[5] && <InformationPassword login={user.login} />}
      </div>
      <div className="w-full h-20 flex justify-center">
        <Iconsprofile values={getValue} />
      </div>
    </div>
  );
}

export default Profile;
