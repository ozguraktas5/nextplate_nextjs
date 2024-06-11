import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: "1",
    first: "Row:1 Cell:1",
    last: "Row:1 Cell:2",
    handle: "Row:1 Cell:3",
  },
  {
    id: "2",
    first: "Row:2 Cell:1",
    last: "Row:2 Cell:2",
    handle: "Row:2 Cell:3",
  },
  {
    id: "3",
    first: "Row:3 Cell:1",
    last: "Row:3 Cell:2",
    handle: "Row:3 Cell:3",
  },
];

export function TableDemo() {
  return (
    <Table className="border-2 rounded-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead >First</TableHead>
          <TableHead>Last</TableHead>
          <TableHead className="text-right">Handle</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="text-left">{invoice.id}</TableCell>
            <TableCell>{invoice.first}</TableCell>
            <TableCell>{invoice.last}</TableCell>
            <TableCell className="text-right">{invoice.handle}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
