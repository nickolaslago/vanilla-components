import { Title } from '@tremor/react';
import React from 'react';

type Props = {
  title: string;
};

export default (props: Props) => {
  return (
        <div>
            <Title className="space-x-2 mt-4 mb-4">{props.title}</Title>
        </div>
    )
}