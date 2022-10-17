import './App.css'
import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from './screen/Pdf'
function App() {
  return (
    <PDFViewer width="100%" height="1000px">
      <MyDocument />
    </PDFViewer>
  )
}

export default App
