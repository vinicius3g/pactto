import { FC } from 'react';
import Image from 'next/image';

import styles from '../Gereric.module.css'

interface ITolltip {
  readonly height: number
  readonly width: number
  readonly image: string
}
const Tooltip: FC<ITolltip> = ({ height, width, image, }) => {
  return (
    <div className="tooltip-container" >
      <div className={styles.tooltip_content}>
        <Image
          src={image}
          alt="Imagem"
          height={height}
          width={width}
          className="tooltip-image"
        />
      </div>
    </div>
  );
}

export default Tooltip;