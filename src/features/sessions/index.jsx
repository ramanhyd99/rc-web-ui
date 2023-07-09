import React from "react";
import Table, { SelectColumnFilter } from "../common/table";
import {
  AvatarCell,
  StatusPill,
  BookedForCell,
} from "../common/table/TableUtils";

const getData = () => {
  const data = [
    {
      booking_id: "132", //this
      name: "Raman Sharma", //this
      email: "ramanhyd99@gmail.com", //this
      booking_date: "15/5/2023 10:23am IST", //this
      phone: "8712384274", //this
      status: "Completed", //this
      gender: "male",
      age: 26,
      booking_for: "{name: asd, phone:asd, age: 34}",
      referee_details: {
        booked_for_name: "John",
        booked_for_email: "john@gmail.com",
        booked_for_age: 24,
        booked_for_phone: "8247778736",
      },
      preferred_mode: "video", //this
    },
  ];
  return [...data];
};

const Sessions = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Booking Id",
        accessor: "booking_id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Date of Session",
        accessor: "booking_date",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Session Link/Address",
        accessor: "Session for",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Preferred mode",
        accessor: "preferred_mode",
      },
      {
        Header: "Booking For",
        accessor: "booking_for",
      },
      // {
      //   Header: "Booked by",
      //   accessor: "booking_id",
      //   Cell: AvatarCell,
      //   imgAccessor: "imgUrl",
      //   emailAccessor: "email",
      // },
      // {
      //   Header: "Date",
      //   accessor: "title",
      // },
      // {
      //   Header: "Status",
      //   accessor: "status",
      //   Cell: StatusPill,
      // },
      // {
      //   Header: "Link",
      //   accessor: "age",
      // },
      // {
      //   Header: "Booked For",
      //   accessor: "role",
      //   Filter: SelectColumnFilter,
      //   Cell: BookedForCell,
      //   filter: "includes",
      //   nameAccessor: "booked_for_name",
      //   emailAccessor: "booked_for_phone",
      // },
      // {
      //   Header: "Booking Details",
      //   accessor: "details",
      //   Cell: BookedForCell,
      //   filter: "includes",
      //   nameAccessor: "booked_for_name",
      //   emailAccessor: "booked_for_phone",
      // },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <div className="mt-8">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Sessions;
