import { StyledStatics, StyledTitle, StyledStatsList, StyledStatsItem } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return (
    <StyledStatics>
        {title && <StyledTitle>{title}</StyledTitle>}
        <StyledStatsList>
            {stats.map(stat => (
                <StyledStatsItem key={stat.id}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
                </StyledStatsItem>
            ))
            }
        </StyledStatsList>
    </StyledStatics>
)
}

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


