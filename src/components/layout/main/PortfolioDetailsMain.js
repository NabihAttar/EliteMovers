import HeroInner from "@/components/sections/heros/HeroInner";
import PortfolioDetailsPrimary from "@/components/sections/portfolios/PortfolioDetailsPrimary";
import getPortfolio from "@/libs/getPortfolio";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const PortfolioDetailsMain = ({ currentItemId }) => {
	const items = getPortfolio();
	const currentId = currentItemId;
	const option = getPreviousNextItem(items, currentId);
	const { title } = option?.currentItem || {};
	return (
		<div>
			<HeroInner
				title={title ? title : "Portfolio details"}
				text={title ? title : "Portfolio details"}
				breadcrums={[{ name: "Portfolios", path: "/portfolios" }]}
			/>
			<PortfolioDetailsPrimary option={option} />
		</div>
	);
};

export default PortfolioDetailsMain;
