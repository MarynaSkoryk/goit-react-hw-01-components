import PropTypes from 'prop-types';
import {
  Section,
  StatList,
  Title,
  Label,
  Percentage,
  Item,
} from 'components/Statistics/Statistics.styled';

const randColor = () => {
  return '#' + Math.floor(Math.random() * 16777215);
};

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title.toUpperCase()}</Title>}

      <StatList>
        {stats.map(statElem => (
          <Item
            style={{
              backgroundColor: randColor(),
              width: `calc(100% / ${stats.length})`,
            }}
            key={statElem.id}
          >
            <Label>{statElem.label}</Label>
            <Percentage>{statElem.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
