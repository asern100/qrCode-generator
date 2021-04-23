import React, {useState, useEffect} from 'react'
import { QRCode } from 'react-qrcode-logo';
import {Container,Row , Col,} from 'reactstrap'

function App() {
  const [array, setarray] = useState([])
  const [sarray, setsarray] = useState([])

 const generate = (array) => {
   var x=0;
   
  for (let index = 5; index < 20; index++) { 
    
    if((index % 5) == 0) {array.push(` ######################## \n ####### Futur Home ####### \n ######################## \n ######## prix : { ${index.toString()} } ####### \n ########################`)}
    x+=1
  }
 }
 const sgenerate = (array) => {
  var x=0;
  
 for (let index = 5; index < 20; index++) { 
   
   if((index % 5) == 0) {array.push(`  Prix : { ${index.toString()} }`)}
   x+=1
 }
}
 generate(array)
 sgenerate(sarray)
  return (
    <div className="App">
    
    
    <Row>
    {
      
      console.log(array)
    }
    {array.map(e => 
      <Col><Row>
      <QRCode size={250} value={e} logoImage="https://p.ventesprivees-fr.com/future-home.png" logoWidth={50} logoHeight={50}/>
      </Row>
      </Col>
      )}
   </Row>
   <Row>
   {
     
     console.log(sarray)
   }
   {sarray.map(e => 
     <Col><Row>
     <QRCode size={50} value={e} logoImage="https://p.ventesprivees-fr.com/future-home.png" logoWidth={10} logoHeight={10}/>
     </Row>
     </Col>
     )}
  </Row>
    </div>
  );
}

export default App;
