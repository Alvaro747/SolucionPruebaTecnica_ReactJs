import React, { useEffect, useState } from "react";

export const TableUserByNationality = ({ nationality }: any) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://randomuser.me/api/?nat=${nationality}&results=10`
      );
      const data = await response.json();
      setUser(data.results);
    };

    fetchUser();
  }, [nationality]);

  if (!user) {
    return <div>Loading...</div>;
  }

 

  return (
    <>
      <div className="w-full bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-2 ">
          <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
            <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    name
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    nationality
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    email
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Age
                  </td>
                </tr>
              </thead>

              {user.map((item: any) => {
                return (
                  <tbody className="bg-white lg:border-gray-300" key={item.age}>
                    <tr className="">
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                        {item.name.first + " " + item.name.last}
                      </td>

                      <td className="sm:whitespace-no-wrap  py-4 pl-6 text-sm font-normal text-gray-600 lg:table-cell">
                        {item.nat}
                      </td>

                      <td className="whitespace-no-wrap py-4 text-center text-sm text-gray-600 sm:px-3  lg:text-left">
                        {item.email}
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                        {item.dob.age}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
