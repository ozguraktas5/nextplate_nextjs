import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="tab1" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">
              Did you come here for something in particular?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            Did you come here for something in particular or just general
            Riker-bashing? And blowing into maximum warp speed, you appeared for
            an instant to be in two places at once. We have a saboteur aboard.
            We know you’re dealing in stolen ore. But I wanna talk about the
            assassination attempt on Lieutenant Worf.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab2">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">
              I wanna talk about the assassination attempt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab3">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">
              We know you’re dealing in stolen ore
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
