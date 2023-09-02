
import './ContainerDirectionCards.scss'
type children = {
    children: React.ReactNode
}
function ContainerDirectionsCards({ children }: children) {
	return <div className='container-direction-cards'>{children}</div>;
}
export default ContainerDirectionsCards
