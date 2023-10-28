import styled from 'styled-components';

const QualifierNews = () => {
  return (
    <Section className="the_grid lg:grid h-fit">
        <div className=" grid-box cursor-pointer" >
            <div className="overflow-hidden rounded-xl">
                <div className="div w-full h-[25rem] rounded-xl hover:scale-[1.07] transition-all duration-300">

                </div>
            </div>
            <p className="mt-4 mb-6 font-medium flex-wrap text-[1.1rem] lg:text-[1.7rem] lg:w-[35rem]">Pep-inspired Sysomvang pursuing big dream with Laos</p>
            <p className=''>We hear from Laos interim head coach Kanlaya Sysomvang, who has ambitions of leading his team all the way to the FIFA World Cup.</p>
        </div>
        <div className=" grid-box cursor-pointer">
            <div className="overflow-hidden rounded-xl">
                <div className="div w-full h-[13rem] rounded-xl hover:scale-[1.07] transition-all duration-300">

                </div>
            </div>
            <p className="mt-4 mb-6 font-medium text-[1rem] w-[17rem]">Pep-inspired Sysomvang pursuing big dream with Laos</p>
        </div>
        <div className=" grid-box cursor-pointer">
            <div className="overflow-hidden rounded-xl">
                <div className="div w-full h-[13rem] rounded-xl hover:scale-[1.07] transition-all duration-300">

                </div>
            </div>
            <p className="mt-4 mb-6 font-medium text-[1rem] w-[17rem]">Pep-inspired Sysomvang pursuing big dream with Laos</p>
        </div>
        <div className=" grid-box cursor-pointer">
            <div className="overflow-hidden rounded-xl">
                <div className="div w-full h-[13rem] rounded-xl hover:scale-[1.07] transition-all duration-300">

                </div>
            </div>
            <p className="mt-4 mb-6 font-medium text-[1rem] w-[17rem]">Pep-inspired Sysomvang pursuing big dream with Laos</p>
        </div>
        <div className=" grid-box cursor-pointer">
        <div className="overflow-hidden rounded-xl">
                <div className="div w-full h-[13rem] rounded-xl hover:scale-[1.07] transition-all duration-300">

                </div>
            </div>
            <p className="mt-4 mb-6 font-medium text-[1rem] w-[17rem]">Pep-inspired Sysomvang pursuing big dream with Laos</p>
        </div>
    </Section>
  )
}

const Section=styled.section`
// background-color:red;
grid-template-columns:2fr 1fr 1fr;
column-gap:1.5rem;
row-gap:1.3rem;
grid-template-areas:
'one two three'
'one four five'
;
    .grid-box{
        &:nth-of-type(1) {
            grid-area: one;
                
            .div{
                background-image:url('https://digitalhub.fifa.com/transform/a3110273-7918-4454-8214-9539c8637be0/Kanlaya-Sysomvang-coaching-Laos-2023?io=transform:fill,aspectratio:16x9,width:640&quality=75');
                background-size:100% 100%;
                // background-color:red;
                background-repeat:no-repeat;
                background-position: center center;
                background-attachment:scroll;
            }
        }
        &:nth-of-type(2) {
            grid-area:two;
           
            div{
                background-image:url('https://digitalhub.fifa.com/transform/0513e3a6-d046-4d7f-929a-9e6b520e7bce/-230616-DALIAN-June-16-2023-Michael-Feichtenbeiner-head-coach-of-Myanmar-instructs-during-an-international-fo?io=transform:fill,aspectratio:16x9,width:450&quality=75');
                background-size:100% 100%;
                // background-color:red;
                background-repeat:no-repeat;
                background-position: center center;
                background-attachment:scroll;
            }
        }
        &:nth-of-type(3) {
            grid-area:three;
            
            div{
                background-image:url('https://digitalhub.fifa.com/transform/94606d1c-537b-4697-ac05-c5f911e8b098/Morocco-v-Croatia-Group-F-FIFA-World-Cup-Qatar-2022?io=transform:fill,aspectratio:16x9,width:450&quality=75');
                background-size:100% 100%;
                // background-color:red;
                background-repeat:no-repeat;
                background-position: center center;
                background-attachment:scroll;
            }
        }
        &:nth-of-type(4) {
            grid-area:four;
            
            div{
                background-image:url('https://digitalhub.fifa.com/transform/c0952d5b-481b-498e-8d07-4fa2091f6fbb/Jordi-Amat-with-Indonesia-National-Team-at-AFF-Cup-2022?io=transform:fill,aspectratio:16x9,width:450&quality=75');
                background-size:100% 100%;
                // background-color:red;
                background-repeat:no-repeat;
                background-position: center center;
                background-attachment:scroll;
            }
        }
        &:nth-of-type(5) {
            grid-area:five;
            div{
                background-image:url('https://digitalhub.fifa.com/transform/e4d12af3-a9a7-4d1b-baca-d167030272f1/Japan-s-midfielder-Kou-Itakura-C-Australia-s-midfielder-Awer-Mabil-L-and-forward-Mitchell-Duke-R-tussle-for-the-ball-during-the-Qatar-World-Cup-2022-Asian-zone-Group-B-qualification-football-match-between-Australia-and-Japan-in-Sydney-on-March-24-2022?io=transform:fill,aspectratio:16x9,width:450&quality=75');
                background-size:100% 100%;
                // background-color:red;
                background-repeat:no-repeat;
                background-position: center center;
                background-attachment:scroll;
            }
        }
    }
`;

export default QualifierNews