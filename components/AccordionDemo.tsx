import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full border-2 px-4 py-0">
      <AccordionItem value="item-1">
        <AccordionTrigger>Why should you need to do this?</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4 list-disc pl-5">
            <li>This is a thing.</li>
            <li>This is a thing.</li>
            <li>This is a thing.</li>
            <li>This is a thing.</li>
            <li>This is a thing.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How can I adjust Horizontal centering
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4 list-disc pl-5">
            <li>This is a thing.</li>
            <li>This is a thing.</li>
            <li>This is a thing.</li>
            <li>This is a thing.</li>
            <li>This is a thing.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Should you use Negative margin?</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4 list-disc pl-5">
            <li>This is a thing.</li>
            <li>This is a thing.</li>
            <li>This is a thing.</li>
            <li>This is a thing.</li>
            <li>This is a thing.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
