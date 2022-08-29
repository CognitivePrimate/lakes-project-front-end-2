import MenuButton from '../buttons/menuButton';
import { GenericMenuWrapper } from '../genericMenuWrapper';

const SchedulingMenu = () => (
   <GenericMenuWrapper>
        <MenuButton 
            to={'/CreateNewSchedule'}
            text={'Create New Schedule'}
        />

        <MenuButton 
            to={'/SignInOut'}
            text={'Sign In/Out'}
        />
   </GenericMenuWrapper>
)

export default SchedulingMenu;