export interface ColumnInterFace{
    data : any,
    xField: string,
    yField: string,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'top'| 'bottom'| 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: string,
        opacity: number,
      },
    },
    xAxis: {
      label: {
        autoHide: boolean,
        autoRotate: boolean,
      },
    },
    meta: {
      type: {
        alias: string,
      },
      sales: {
        alias: string,
      },
    },
}