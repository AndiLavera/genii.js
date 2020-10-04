interface Styles {
  background?: Record<'r' | 'g' | 'b' | 'a', number>;
  color?: Record<'r' | 'g' | 'b' | 'a', number>;
  margin?: string[];
}

export default function formatStyles(props: Styles) {
  const { background, color, margin } = props;
  const style = {
    margin: '',
    color: '',
    background: '',
  };

  style.margin = margin
    ? `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`
    : '';
  style.color = color ? `rgba(${Object.values(color)})` : '';
  style.background = background ? `rgba(${Object.values(background)})` : '';

  return style;
}
