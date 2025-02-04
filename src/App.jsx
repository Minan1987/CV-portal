import { React, useState } from 'react'
import MainLayout from './components/layouts/MainLayout'
import Sidebar from './components/Sidebar'
import ContentContainer from './components/ContentContainer'

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange} />
      <ContentContainer />
    </MainLayout>
  )
}

export default App
