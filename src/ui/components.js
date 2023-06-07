import { styled } from "./stitches.config";

export const Content = styled('div', {
    height: 'inherit',
    display:"flex", flexDirection:"column", 
    '@bp3': {
        alignItems:"center",
      },
   
   
})

export const TopBox = styled('div', {
    width: "100vw",
    display: "flex",
    flex:"1 1",
    flexDirection: "column",
  
    alignItems: "center",
    background: "linear-gradient(45deg, #FF8008, 68%, #FFC837)"

})

export const HorizontalFlexBoxWithColor = styled('div', {
    display: "flex",
    alignItems:"center",
    paddingTop:"20px",
    paddingBottom:"20px",
    marginBottom: "15px",
    width: "1380",
    flexDirection: "column-reverse",
    minHeight:"350px",
    borderRadius: "10px",
    fontWeight: "400",
    justifyContent:"space-between",
    '@bp3': {
        width:"1000px",
      },

      '@bp0': {
        flexDirection:"column",
      },
})

export const ParagraphBox = styled('div', {
    display: "flex",
    fontSize:"$header1",
    color:"$antibackground",
    fontFamily: " Inter, Arial",
    width: "1380",
    textAlign:"left",
    paddingInline: "20px",
    flexDirection: "column",
    paddingBottom:"40px",
   
})

export const MiniParagraphBox = styled('div', {
    display: "flex",
    fontSize:"15px",
    fontFamily: " Inter, Arial",
    width: "1380",
    textAlign:"left",
    paddingInline: "20px",
    color: "white",
    paddingBottom:"40px",
    fontWeight:"5",
})

export const BraggingBox = styled('div', {
    display: "flex",
    alignItems:"center",
    padding:"",
    backdropFilter: "blur(15px)",
    paddingBottom: "10px",
    paddingTop:"10px",
    marginTop:"-50px",
    marginBottom:"40px",
    borderRadius:"10px",
    width: "1380",
    flexDirection: "column",
    background:"rgb(255,255,255,0.3)",
    mixBlendMode: "luminosity",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    width:"980px",
    '@bp0': {
        width:"90%",
    }
    
})

export const InteranalParagraphBox = styled('div', {

    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"",
    fontSize:"30px",
    flexDirection: "column",
    height: "80px",
    color:"#616161",
    '@bp3': {
   
      },
})

export const InteranalParagraphBoxDisapear = styled('div', {

    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"",
    fontSize:"30px",

    // maxWidth: "1000px",
    flexDirection: "column",
    height: "80px",
    color:"#616161",
    
    '@bp630': {
        display:"none"
      },
   
    
})

export const InteranalParagraphBoxDisapearLater = styled('div', {

    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"",
    fontSize:"30px",

    // maxWidth: "1000px",
    flexDirection: "column",
    height: "80px",
    color:"#616161",
    
    '@bp400': {
        display:"none"
      },
   
    
})

export const HorizontalFlexBox = styled('div', {

    display: "flex",
    alignItems:"center",
    padding:"",
   
    width: "100%",
    justifyContent:"space-evenly",
    flexDirection: "row",

      '&::-webkit-scrollbar': { 
        display: "none", 
    }
})

export const Top = styled('div', {
    fontSize:"$header1",
    color:"#616161",
    
})

export const Bottom = styled('div', {
    fontSize:"$title",
  
})

export const ParagraphContainer = styled('div', {
    display: 'flex',
    width: '980px',
    background: 'transparent',
    alignItems: 'top',
    textAlign: 'center',
    paddingBottom:"40px",

    '@bp0': {
        width: '720px',
        flexDirection: 'column',
        alignItems:"center",
    },
    '@bp734': {
        width:"375px"
    }
})