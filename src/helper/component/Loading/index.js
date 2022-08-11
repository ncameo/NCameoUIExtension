import React from 'react'
import { BeatLoader, BarLoader,CircleLoader } from 'react-spinners';

const Loading = (props) => (
  <div className={'sweet-loading ' + props.class}>
    {props.type === 'controls' ?
      <BeatLoader
        className={props.loaderClass ? props.loaderClass : "override"}
        margin={"1px"}
        size={8}
        color={'#123abc'}
        loading={props.enable}
      />
      : props.type === 'child' ?
        <BarLoader
          className={props.loaderClass ? props.loaderClass : "override"}
          height={10}
          width={40}
          color={'#dcdfe4'}
          loading={props.enable}
        />
        :
        <CircleLoader
          className={props.loaderClass ? props.loaderClass : "override"}
          // radius={2}
          // margin={"2px"}
          size={50}
          color={'#757575'}
          loading={props.enable}
        />
    }
  </div>
)

export default Loading 
