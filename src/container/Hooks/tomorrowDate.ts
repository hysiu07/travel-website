
export const tomorrowDate = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return (tomorrow.toISOString().split('T')[0])
}

export const nextWeekDate = () => {
      const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 7)
    return (tomorrow.toISOString().split('T')[0])
}