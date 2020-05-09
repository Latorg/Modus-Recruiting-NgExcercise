export interface Task {
  description: string;
  links?: Array<string>;
  routerLinks?: Array<string>;
}

const tasks: Array<Task> = [
  {
    description: `
    Create a lazy loaded page that lists users via a component named: 'users-list'.
    Use {{link}} to get 12 users and display them in a list on that page.
    The properties to be shown for each user should include:
    First Name and Last Name
    `,
    links: ["https://reqres.in/"]
  },
  {
    description: `
    On click of any of the users, the app should navigate to the user detail page via a component named: 'user-detail'.
    The url should contain the user id.
    There should be a back button on the user detail page so one can go back to the user list page.
    The properties to be shown should include:
    Avatar, First Name, Last Name and Email
  `,
    routerLinks: ["home"]
  },
  {
    description: `
    The HOME page currently has two components: 'app-header' and 'app-content'.
    The end user can log in from each of the two components, but the state in these components are not synced.
    I.e. if the user logs in/out from the app-header, the app-content doesn't get notified.
    Go to {{link}} and implement the logic to notify the 'app-header' component
    and the 'app-content' component when the user logs in and logs out of the app from either of the two components.
  `,
    routerLinks: ["home"]
  }
];

export default tasks;
