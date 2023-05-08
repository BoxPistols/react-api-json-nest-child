import "./styles.css";
// import { DataChild } from "./DataChild";
import { KpiTable } from "./KpiTable";
import MarketingDataGenerator from "./MarketingDataGenerator";
// import Data from "./data.json"; // 追加
// import { DataAddress } from "./DataAddress";

export default function App() {
  // const users = [
  //   {
  //     id: 1,
  //     email: "george.bluth@reqres.in",
  //     first_name: "George",
  //     last_name: "Bluth",
  //     avatar: "https://reqres.in/img/faces/1-image.jpg"
  //   },
  //   {
  //     id: 2,
  //     email: "janet.weaver@reqres.in",
  //     first_name: "Janet",
  //     last_name: "Weaver",
  //     avatar: "https://reqres.in/img/faces/2-image.jpg"
  //   },
  // ];

  // const Datas = Data.data;
  // const Email = Data.data.email;
  // const FirstName = Data.data.first_name;

  return (
    <>
      <div className="App">
        {/* <h1>Hello CodeSandbox</h1>
      <h2>some magic happen!</h2>
      <div>
        <ul>
          {Datas.map((user) => (
            <li key={user.id}>
              {user.first_name}: {user.email}
            </li>
          ))}
        </ul>
      </div> */}

        {/* DataChild */}
        <h2>KpiTable</h2>
        <KpiTable />

        {/* DataChild */}
        {/* <h2>DataChild</h2>
      <DataChild /> */}

        {/* DataAddress */}
        {/* <h2>DataAddress</h2>
      <DataAddress /> */}
      </div>

      <div className="App">
        <MarketingDataGenerator />
      </div>
    </>
  );
}
