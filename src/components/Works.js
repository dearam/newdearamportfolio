import {React,useState} from 'react'
import styled from 'styled-components';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import data from "../nandhu.json";

const INITIAL_LIST = Array.from({ length: 75 }, () => false);
const COUNT_LIST = Array.from({ length: 75 }, () => 0);

function Works() {
  const [list] = useState(INITIAL_LIST)

  const [userinfo, setUserInfo] = useState({
    gettingdatas: [],
    response: [],
  });

  
  const handleOnChange = (e,name,i) => {

    const { checked } = e.target;
    const { gettingdatas} = userinfo;
    const passdata=name;
    if (checked) {
      COUNT_LIST[i]+=1;
      setUserInfo({
        gettingdatas: [...gettingdatas, passdata],
        response: [...gettingdatas, passdata],
      });
    }
    else {
      COUNT_LIST[i]-=1;
      setUserInfo({
        gettingdatas: gettingdatas.filter((e) => e !== passdata),
        response: gettingdatas.filter((e) => e !== passdata),
      });
    }
    if(COUNT_LIST[i]>0){
      INITIAL_LIST[i]=true;
    }else{
      INITIAL_LIST[i]=false;
    }
  };
  return (
    <Workspage>
        <Left>
          <Card>
            <Header>
              <Title>Select your deseases</Title>
              <Button>Add new selection</Button>
            </Header>
            <Content>
                  {data.map((node,i)=>{
                    const type=i;
                    const label=<><input type="checkbox" checked={list[i]}/><span>Employee {i}</span></>
                    return(
                      <TreeView
                        key={type+"|"+i}
                        nodeLabel={label}
                        defaultCollapsed={true}>
                                  <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    //onChange={()=>handleOnChange(i,input1)}
                                    onChange={(e)=>handleOnChange(e,node.id,i)}
                                  />{node.id}<br/>
                                  <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    //onChange={()=>handleOnChange(i,input2)}
                                    onChange={(e)=>handleOnChange(e,node.name,i)}
                                  />{node.name}<br/>
                                  <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    //onChange={()=>handleOnChange(i,input3)}
                                    onChange={(e)=>handleOnChange(e,node.diagnosis_category,i)}
                                  />{node.diagnosis_category}<br/>
                                  <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    //onChange={()=>handleOnChange(i,input4)}
                                    onChange={(e)=>handleOnChange(e,node.diagnosis_tags,i)}
                                  />{node.diagnosis_tags}
                        </TreeView>
                    )
                  })}
            </Content>
          </Card>
        </Left>
        <Right>
          <RCard>
          <Head>
              <Title>Select your deseases</Title>
              <RButton>Proceed with {userinfo.response.length}</RButton>
            </Head>
            <Line/>
            <RContent>
            {userinfo.response.map((rnode)=>{
                return(
                  <p>{rnode}</p>
                )
              })}
            </RContent>
          </RCard>
        </Right>
    </Workspage>
  )
}
const Line=styled.div`
  background-color: #999;
  height: 2px;
  width: 100%;
`;
const RContent=styled.div`
    height: 100%;
    width: 100%;
    word-spacing: 0%;
    margin: 30px 0px 30px 20px;
    line-height: 5px;
    color: #333;
    font-family: poppins;
    font-size: 14px;
    font-weight: 400;
    left: 10px;
    background-color: #fff;
`;
const RButton=styled.div`
  border: 2px solid #05aa6c;
  border-radius: 10px;
  background-color: #05aa6c;
  color: #fff;
  right: 10px;
  top: 15px;
  position: absolute;
  font-family: poppins;
  font-weight: 500;
  padding: 5px 10px 5px 10px;
  &:hover{
    background-color: #fff;
    color: #05aa6c;
  }
`;
const Content=styled.div`
    left: 20px;
    position: relative;
    height: 250vh;
    width: 100%;
`;
const Head=styled.div`
  height: 70px;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  background-color: #fff;
`;
const Header=styled.div`
  height: 4%;
  width: 100%;
  background-color: #fff;
  border-radius: 10px 0px 10px 0px;
`;
const Title=styled.div`
  font-family: poppins;
  font-weight: 500;
  position: relative;
  left: 10px;
  top: 20px;
`;
const Button=styled.button`
  border: 2px solid green;
  border-radius: 10px;
  background-color: none;
  color: green;
  right: 10px;
  top: 15px;
  position: absolute;
  font-family: poppins;
  font-weight: 500;
  padding: 5px 10px 5px 10px;
  &:hover{
    background-color: green;
    color: #fff;
  }
`;
const RCard=styled.div`
  top: 50px;
  border-radius: 5px;
  background-color: #fff;
  left: 10%;
  position: relative;
  height: 100%;
  width: 70%;
  overflow: hidden;
`;
const Card=styled.div`
  top: 50px;
  border:2px solid #333;
  border-radius: 10px;
  background-color: #fff;
  left: 10%;
  position: relative;
  height: 250vh;
  width: 70%;
`;
const Left=styled.div`
  flex: 1;
`;
const Right=styled.div`
  height: 100%;
  flex: 1;
`;
const Workspage=styled.div`
    position: relative;
    background-color: #999;
    width: 95%;
    height: 100%;
    left: 5%;
    display: flex;
`;

export default Works