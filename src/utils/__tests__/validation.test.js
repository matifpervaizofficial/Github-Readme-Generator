import { isGitHubUsernameValid, isMediumUsernameValid, isTwitterUsernameValid } from '../validation';

describe('validation', () => {
  it('isGitHubUsernameValid', () => {
    expect(isGitHubUsernameValid('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(false);
    expect(isGitHubUsernameValid('matifpervaizofficial')).toBe(true);
  });

  it('isMediumUsernameValid', () => {
    expect(isMediumUsernameValid('matifpervaizofficial')).toBe(false);
    expect(isMediumUsernameValid('@matifpervaizofficial')).toBe(true);
  });

  it('isTwitterUsernameValid', () => {
    expect(isTwitterUsernameValid('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(false);
    expect(isTwitterUsernameValid('matifpervaizofficial')).toBe(true);
  });
});
