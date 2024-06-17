import React from "react"
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"
import { getVan } from "../../api"


export function loader({ request }) {
    const pathSegments = request.url.split('/')
    const collectionName = pathSegments[pathSegments.length - 1]
    return getVan(collectionName)
}

export default function VanDetail() {
    const colloecData = useLoaderData()

    const [openItems, setOpenItems] = React.useState({});

    const toggleItem = (index) => {
        setOpenItems((prevOpenItems) => ({
          ...prevOpenItems,
          [index]: !prevOpenItems[index],
        }));
      };

    const [openOption, setOption] = React.useState({});

    const toggleOption = (index) => {
        setOption((prevOpenOption) => ({
          ...prevOpenOption,
          [index]: !prevOpenOption[index],
        }));
      };
    
    const itemsList = colloecData.map((item, idx) => {
        
        return <div key={idx} className="item-slice">
                  <div onClick={() => toggleItem(idx)} style={{cursor: 'pointer',}}>
                      <h2>{item.name}</h2>                  
                  </div>
               { openItems[idx] && 
                  <div>
                      { subItem(item) }
                  </div>}
               </div>
})


    return (
        <div className="catego-detail-container">

            <Link
                to={`..`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all categories</span></Link>

            {itemsList}

        </div>
    )

    function subItem(item){
        const intro = item.intro.map(line => (
                <p className={line.className}>
                    {line.introText}
                </p>
            ))
        
        const shoppingOptions = item.shoppingOptions && 
        <div>
            {item.shoppingOptions.map((option, idx) => (
                <div className="option-card" onClick={() => toggleOption(idx)} style={{cursor: 'pointer',}}>
                    <h2 key={idx}>
                        {option.name}
                    </h2>
            { openOption[idx] &&  <p>
                        {option.descrip} <span className="main-question">ADD TO CART</span>
                    </p>}
                </div>
            ))}
        </div>

        return (
            <>
                {intro}
                {shoppingOptions}
            </>
        )
    }
}