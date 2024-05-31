
// This code defines the component you see called "Heading" 
// in the visual editor. Try dragging and dropping the "Heading" 
// block on the page to the right. Then edit this code here too!
const Heading = ({ title, subtitle }: any) => {
  return [
    <>
    <h1 className="text-4xl"># {title}</h1>
    <h2 className="text-4xl"># {subtitle}</h2>
    </>
  ]
  
}

export default Heading;