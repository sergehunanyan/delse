<Popup class="edit_profile_modal" swipeToClose>
    <Page>
        <Navbar>
            <NavLeft>
                <Link popupClose>
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none" width="18" height="18"><path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000" fill="transparent"/></svg>
                </Link>
            </NavLeft>
        </Navbar>

        <div style="height: 100%" class="edit_profile_content">
            <div class="user_image"></div>
            <div class="user_more_info modal_open">
                <form action="" class="update_user_profile_form">
                    <List>
                        <ListItem>
                            <span>{lang('profile.ownership')}:</span>
                            <input type="text" value="" name="payerAccountNumber">
                        </ListItem>
                        <ListItem>
                            <span>{lang('profile.organisation_name')}:</span>
                            <input type="text" value="" name="middleNAme">
                        </ListItem>
                        <ListItem>
                            <span>{lang('profile.unp')}</span>
                            <input type="text" value="" name="typeOfOwnership">
                        </ListItem>
                        <ListItem>
                            <span>{lang('profile.country_city')}:</span>
                            <p>1234567890</p>
                        </ListItem>
                        <ListItem>
                            <span>{lang('profile.organisation_address')}</span>
                            <input type="text" value="" name="organizationAddress">
                        </ListItem>
                        <ListItem>
                            <span>{lang('profile.birthday')}</span>
                            <Input type="datepicker" value="" name="dateOfBirth" placeholder="dd.mm.yyyy" calendarParams={{ dateFormat: 'yyyy-mm-dd' }} />
                        </ListItem>
                    </List>

                    <div class="update_user_profile">
                        <Button round class="update_user_profile_button">{lang('profile.save')}</Button>
                    </div>
                </form>
            </div>
        </div>
    </Page>
</Popup>

<div on:click="{toggleHeader}" class="{status === true ? 'open user_details' : 'user_details'}">
    <div class="user_image"></div>
    <Button popupOpen=".edit_profile_modal" class="edit_profile" on:click="{toggleHeader}">
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none"
             viewBox="0 0 645 645" width="20" height="20">
            <path xmlns:default="http://www.w3.org/2000/svg"
                  d="M539.3 0L0 539.3v105.2h105.2l539.3-539.3L539.3 0zm68.4 105.2l-63.1 63.1-68.4-68.3 63.1-63.1 68.4 68.3zm-513 513.1H26.3v-68.4L457.8 121l68.4 68.4L94.7 618.3z"
                  vector-effect="non-scaling-stroke" fill="#fff"/>
        </svg>
    </Button>
    <p class="name">Тухфатуллина Мария Сергеевна</p>
    <p class="country">Беларусь, Минск</p>

    <div class="user_ratings">
        <Block>
            <p>{lang('profile.customer_rating')}:</p>
            <div class="rate_details">
                <div class="rate">4,7</div>
                <Icon f7="star_fill" size="16px" color="black"/>
                <div class="status">Профессионал</div>
            </div>
        </Block>
        <Block>
            <p>{lang('profile.transporter_rating')}:</p>
            <div class="rate_details">
                <div class="rate">4,2</div>
                <Icon f7="star_fill" size="16px" color="black"/>
                <div class="status">Новичок</div>
            </div>
        </Block>
    </div>

    <div class="user_more_info">
        <List>
            <ListItem>
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none" viewBox="0 0 44 44" width="20" height="20"><path d="M43.8 33.4L37.5 27c-1.1-1.1-3.1-1.1-4.2 0l-2.8 2.8c-1.1 1.1-3.1 1.1-4.2 0L14.8 18.5c-1.2-1.2-1.2-3.1 0-4.2l2.8-2.8c.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1L11.2.9C10.1-.2 8.1-.2 7 .9L4.2 3.7l-.1.1c-.2 0-.6.3-.8.8-3.6 3.8-4.3 8.5-1.9 14 1.8 4.1 5.2 8.7 10.6 14 8.2 8.2 14.6 12 20.2 12 2.9 0 5.6-1.1 7.9-3.3.5-.2.7-.6.8-.8 0-.1.1-.1.1-.1l2.8-2.8c1.2-1.2 1.2-3.1 0-4.2zM8.5 2.3c.4-.4 1-.4 1.4 0l6.4 6.4c.2.2.3.4.3.7s-.1.5-.3.7l-2.1 2.1-7.9-7.8 2.2-2.1zm4.9 29c-5.2-5.2-8.5-9.6-10.2-13.4C1.1 13 1.7 9 4.9 5.8l7.8 7.9c-1.3 1.9-1.1 4.6.6 6.3l11.3 11.3c.9.9 2.2 1.5 3.5 1.5 1 0 1.9-.3 2.8-.8l7.9 7.8c-2 2-4.2 2.9-6.7 2.9-4.9 0-11-3.8-18.7-11.4zm29 4.9l-2.1 2.1-7.8-7.8 2.1-2.1c.4-.4 1-.4 1.4 0l6.4 6.4c.4.4.4 1 0 1.4z" vector-effect="non-scaling-stroke" fill="#ffba2b" xmlns:default="http://www.w3.org/2000/svg"/></svg>
                <p>+3745616332</p>
            </ListItem>
            <ListItem>
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     overflow="visible" preserveAspectRatio="none" viewBox="0 -5.491961414790996 56 56" width="16"
                     height="16">
                    <g>
                        <g>
                            <path d="M51,0H5C3.7,0,2.6,0.5,1.7,1.3c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0.1C0.6,2.3,0,3.6,0,5v35c0,2.8,2.2,5,5,5h46    c2.8,0,5-2.2,5-5V5C56,2.2,53.8,0,51,0z M51,2c0.4,0,0.8,0.1,1.1,0.2L28,26.4L3.8,2.2C4.2,2.1,4.6,2,5,2H51z M54,40    c0,1.7-1.3,3-3,3H5c-1.7,0-3-1.3-3-3V5c0-0.5,0.1-1,0.4-1.4L27,28.2c0.2,0.2,0.5,0.3,0.7,0.3c0.1,0,0.2,0,0.3-0.1    c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.5-0.1,0.7-0.3L53.6,3.6C53.9,4,54,4.5,54,5V40z"
                                  style="fill: rgb(255, 186, 43);" vector-effect="non-scaling-stroke"/>
                        </g>
                    </g>
                    <g/>
                </svg>
                <p>example@gmail.com</p>
            </ListItem>
            <ListItem>
                <span>{lang('profile.birthday')}</span>
                <p>03.03.1986</p>
            </ListItem>
            <ListItem>
                <span>{lang('profile.unp')}</span>
                <p>1234567890</p>
            </ListItem>
            <ListItem>
                <span>{lang('profile.organisation_address')}</span>
                <p>Минск...</p>
            </ListItem>
        </List>

        <div class="user_more_logout">
            <Button href="/login/" on:click={logout}>{lang('profile.logout')}</Button>
        </div>
    </div>
</div>

<script>
    import {Page, Popup, Navbar, NavLeft, Block, Icon, Button, List, ListItem, Input, Link} from 'framework7-svelte';
    import {api, lang} from '@/js/api'

    let status = false;

    function toggleHeader() {
        status = !status;
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = '';
    }
</script>