
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu'
import './App.css'
import CurrentLocation from './CurrentLocation'
import ReportTable from './ReportTable'
import { Button, Tabs } from '@chakra-ui/react'

function App() {

  return (
    <>
      <CurrentLocation/>

      <Tabs.Root defaultValue="members" variant="plain" marginLeft='10px' marginTop='10px'>
      <Tabs.List bg="bg.muted" rounded="l3" p="1">
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
          Settings
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content value="members"><ReportTable/></Tabs.Content>
      <Tabs.Content value="projects"><ReportTable/></Tabs.Content>
      <Tabs.Content value="tasks">
      <ReportTable/>
      </Tabs.Content>
    </Tabs.Root>
    </>
  )
}

export default App
