import React,{useEffect} from "react"
import Layout from '../components/layout'
import ColorDiv from '../components/colorFull'
import Intro from '../components/introduction'
import "../.././node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import LocomotiveScroll from "locomotive-scroll";

// styles
// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }

// markup
const IndexPage = () => {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      reloadOnContextChange:true,
      gestureDirection:'both'
    });
  },[]);
  return (
    <Layout>
      <div data-scroll-container ref={scrollRef}>
        <Intro name={"Krishna Ashok"}/>
        <ColorDiv />  
      </div>
    </Layout>
  )
}

export default IndexPage
