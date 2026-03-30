import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key={relativeList}>
                <li key={relativeList1}>bharath1</li>
                <li key={relativeList2}>bharath2</li>
                <li key={relativeList3}>bharath3</li>
                <li key={relativeList4}>bharath4</li>
               </ol>
    </div>
  )
}

export default App
