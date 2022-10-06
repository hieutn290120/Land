
export interface PieInterface {
    appendPadding: number,
    data: any,
    theme: string,
    angleField: string,
    colorField: string,
    radius: number ,
    innerRadius: number ,
    meta: {
      value: {
        formatter: (v:number) => void,
      },
    },
    label: {
      type: string,
      offset: string,
      autoRotate: boolean,
      style: {
        textAlign: string,
        fill: string,
      },
      formatter: ({ percent }: any) => string,
    },
    statistic: {
      title: {
        offsetY: any,
        style: {
          color: string,
        },
      },
      content: {
        style: {
          color: string,
        },
        offsetY: any,
      },
    },
    pieStyle: {
      lineWidth: number,
    },
};

