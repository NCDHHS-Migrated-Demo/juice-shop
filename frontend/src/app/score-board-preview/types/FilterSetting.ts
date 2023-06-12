export interface FilterSetting {
    // categories to display. if empty, all categories are displayed
    categories: Set<string>

    // difficulties to display. if empty, all difficulties are displayed
    difficulties: Array<1|2|3|4|5|6>

    // tags to display. if empty, all tags are displayed
    tags: string[]

    // status to display. if null, all status are displayed
    status: 'solved' | 'unsolved' | null
}

export const DEFAULT_FILTER_SETTING: Readonly<FilterSetting> = Object.freeze({
    categories: new Set<string>(),
    difficulties: [],
    tags: [],
    status: null
})
