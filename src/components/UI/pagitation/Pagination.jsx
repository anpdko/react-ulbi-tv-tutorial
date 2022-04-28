import React from 'react';
import MyButton from '../button/MyButton'

const Pagination = ({pagesArray, page, setPage}) => {
   return (
      <>
       {pagesArray.map(p => 
          <MyButton 
            style = {{
              marginTop: '10px', 
              marginRight: '5px', 
              boxShadow: p === page && '0px 0px 1px teal',
              border: p === page && '2px solid teal'
            }} 
            onClick={()=>setPage(p)}
            key = {p}>
            {p}
          </MyButton>
        )}
      </>
   );
};

export default Pagination;