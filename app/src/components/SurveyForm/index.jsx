import { Card, Label, Checkbox, Flex, Button } from "@twilio-paste/core"
import { useCallback, useState } from "react"

export default function SurveyForm() {
  const [bees, setBees] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [pollen, setPollen] = useState(false);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    await window.analytics.track('Allergies', {
      allergies: {"BeeStings": bees, "Nuts": nuts, "Pollen": pollen},
      SSN: "123-45-6789",
    });
    event.target.reset();
  }, [bees, nuts, pollen]);

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="allergies">Allergies</Label>
          <Flex vertical>
            <Checkbox 
              checked={bees}
              id="bee"
              value="bee"
              name="bee"
              onChange={(event) => {
                setBees(old => !old)
              }}
            >
              Bee Stings
            </Checkbox>
            <Checkbox 
              checked={nuts}
              id="nuts"
              value="nuts"
              name="nuts"
              onChange={(event) => {
                setNuts(old => !old)
              }}
            >
              Nuts
            </Checkbox>
            <Checkbox 
              checked={pollen}
              id="blm"
              value="blm"
              name="blm"
              onChange={(event) => {
                setPollen(old => !old)
              }}
            >
              Pollen
            </Checkbox>
            <Button type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Card>
    </>
  )
}