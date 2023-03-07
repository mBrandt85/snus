import { NumberInput, Stack, Text, TextInput } from "@mantine/core"
import { IconWeight } from "@tabler/icons-react"
import { useState } from "react"

const firstSet = {
  natriumChloride: 0.09,
  water: 1.25,
}

const secondSet = {
  sodiumCarbonate: 0.078,
  glycerine: 0.045,
  water: 0.3
}

export default function App() {
  const [v, set] = useState('')

  return (
    <div style={{
      margin: '0 auto',
      width: '100%',
      maxWidth: 400,
      padding: 24
    }}>
      <Stack>
        <TextInput
          placeholder="Hur många gram tobak?"
          radius="md"
          size="lg"
          rightSection={<IconWeight />}
          onChange={e => set(e.target.value)}
        />

        {v && Number.isNaN(Number(v)) 
          ? 'Fyll i tobak i nummer!'
          : v.length > 0 && <>
            <Text fz="lg">Steg 1</Text>
            <Text fz="md">
              Lös upp {Math.round(Number(v) * firstSet.natriumChloride)}g
              natriumklorid i {Math.round(Number(v) * firstSet.water)}ml uppvärmt vatten.
            </Text>
            <Text fz="md">Blanda tobaken med saltvattnet.</Text>
            <Text fz="md">Ställ i ugnen på 100 C i 35-40 timmar.</Text>
            <Text fz="lg">Steg 2</Text>
            <Text fz="md">Låt snuset kallna.</Text>
            <Text fz="md">
              Lös upp {Math.round(Number(v) * secondSet.sodiumCarbonate)}g
              natriumkarbonat i {Math.round(Number(v) * secondSet.water)}ml uppvärmt vatten.
            </Text>
            <Text fz="md">
              Blanda saltvattnet och {Math.round(Number(v) * secondSet.glycerine)}ml 
              glycering med tobaken och blanda tills konsistensen är bra.
            </Text>
          </>
        }
      </Stack>
    </div>
  )
}