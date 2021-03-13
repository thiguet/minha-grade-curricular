import React from 'react';
import renderer from 'react-test-renderer';
import SubjectCard, { SubjectCardProps } from '../../src/components/SubjectCard';
import { mount } from 'enzyme';
import { getFakeSubjectCardProps } from '../fake/ComponentProps';

describe('Subject Card', () => {
    let props: SubjectCardProps;

    const build = () => {
        const wrapper = mount(<SubjectCard {...props} />);
        const snapRenderer = renderer.create(<SubjectCard {...props} />);
        return {
            wrapper,
            snapRenderer,
            subjectName: () => wrapper.find('.subject-name'),
            hours: () => wrapper.find('.hours'),
            acronym: () => wrapper.find('.acronym'),
            closeBtn: () => wrapper.find('.close-btn'),
        };
    };

    beforeEach(() => {
        props = getFakeSubjectCardProps();
    });
    it('must render the component as expected', () => {
        props = {
            name: 'fixed name',
            hours: 20,
            acronym: 'FN',
            onClick: jest.fn(),
        };
        const { snapRenderer } = build();
        expect(snapRenderer.toJSON()).toMatchSnapshot();
    });

    it('must render main components', () => {
        const { subjectName, hours, acronym } = build();

        expect(subjectName()).toBeTruthy();
        expect(hours()).toBeTruthy();
        expect(acronym()).toBeTruthy();
    });

    it('must pass props to main main components', () => {
        const { subjectName, hours, acronym } = build();

        expect(subjectName().text()).toBe(props.name);
        expect(hours().text()).toBe(`${props.hours}`);
        expect(acronym().text()).toBe(`${props.acronym}`);
    });

    it('must simulate a click from the close button component', () => {
        const { closeBtn } = build();

        closeBtn().simulate('click');

        expect(props.onClick).toBeCalled();
    });
});
