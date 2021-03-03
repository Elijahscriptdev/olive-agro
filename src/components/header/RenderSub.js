import React from "react";
import { Link } from "react-router-dom";

export const RenderSub = (props) => {
  const { show } = props;

  return (
    <div>
      {show.map((sub, id) => {
        return (
          <div key={id}>
            <ul className=''>
              <li key={id} className=''>
                <Link to='/' className=''>
                  {sub.name}
                </Link>
              </li>
              <br />
            </ul>
          </div>
        );
      })}
    </div>
  );
};
