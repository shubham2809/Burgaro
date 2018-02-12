import  React  from 'react';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import {configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<NavigationItems />' , ()=> {

        let wrapper;
        beforeEach(() => {
                wrapper = shallow(<NavigationItems/>);
        });

        it('Should render two Navigationitem element if not authenticated', () => {
                
                expect(wrapper.find(NavigationItem)).toHaveLength(2);
        }); 

        it('Should render three Navigationitem element if  authenticated', () => {
                wrapper.setProps({isAuthenticated: true});
                expect(wrapper.find(NavigationItem)).toHaveLength(3);
        }); 

        it('Should render one  Navigationitem with link to logout if  authenticated', () => {
                wrapper.setProps({isAuthenticated: true});
                expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
        }); 
});
