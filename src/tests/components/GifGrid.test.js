import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('GifGrid', () => {
    const category = 'music';
    test('should render a function', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })
    test('should render', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: 'ABC123',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})