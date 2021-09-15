import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp";

describe('GifExpertApp', function () {
    test('should be a function', function () {
        const categoriesGifs = [
            'music', 'reggae'
        ]
        const wrapper = shallow(<GifExpertApp categoriesGifs={categoriesGifs} />);
        expect(wrapper).toMatchSnapshot();
    })
    test('should show a list of categories', function () {
        const categoriesGifs = [
            'music', 'reggae'
        ]
        const wrapper = shallow(<GifExpertApp categoriesGifs={categoriesGifs} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categoriesGifs.length);
    })
})