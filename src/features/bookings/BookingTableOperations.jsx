import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  const searchParamsToReset = [{ name: "page", value: 1 }];
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", lable: "All" },
          { value: "checked-out", lable: "Checked out" },
          { value: "checked-in", lable: "Checked in" },
          { value: "unconfirmed", lable: "Unconfirmed" },
        ]}
        searchParamsToReset={searchParamsToReset}
      />

      <SortBy
        options={[
          { value: "startDate-desc", lable: "Sort by date (recent first)" },
          { value: "startDate-asc", lable: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            lable: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", lable: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
