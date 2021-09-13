import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('GifGridItem', () => {
    const title = 'Title'
    const url = 'https://media1.giphy.com/media/l0HlW7JqkvXy/200w.gif'
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('show the component GifGridItem', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('verify if content paragraph with title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('verify src and alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('verify if contain the class animate__bounce ', () => {
        const div = wrapper.find('div');
        //console.log(div.prop('className'));
        expect(div.hasClass('animate__bounce')).toBe(true);
    })
})