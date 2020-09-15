<Popup class="edit_profile_modal" swipeToClose>
    <Page>
        <Navbar>
            <NavLeft>
                <Link popupClose>
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none"
                         width="18" height="18">
                        <path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000"
                              fill="transparent"/>
                    </svg>
                </Link>
            </NavLeft>
        </Navbar>

        <div style="height: 100%" class="edit_profile_content">
            {#if logo != null}
                <div class="user_image" style="background-image: url({logo})">
                    <Icon f7="camera_rotate" size="35px" color="orange"/>
                </div>
            {/if}
            <div class="user_more_info modal_open">
                <form action="" class="update_user_profile_form" on:submit|preventDefault={updateProfile}>
                    <List>
                        {#if userInfo.isOrganizationUser}
                            <ListItem>
                                <span>{lang('profile.ownership')}:</span>
                                <input type="text" bind:value={userInfo.typeOfOwnership} name="typeOfOwnership">
                            </ListItem>
                            <ListItem>
                                <span>{lang('profile.organisation_name')}:</span>
                                <input type="text" bind:value={userInfo.organizationName} name="organizationName">
                            </ListItem>
                            <ListItem>
                                <span>{lang('profile.organisation_address')}</span>
                                <input type="text" bind:value={userInfo.organizationAddress} name="organizationAddress">
                            </ListItem>
                            <ListItem>
                                <span>{lang('profile.unp')}</span>
                                <input type="text" bind:value={userInfo.payerAccountNumber} name="payerAccountNumber">
                            </ListItem>
                        {:else}
                            <ListItem>
                                <span>{lang('profile.last_name')}:</span>
                                <input type="text" bind:value={userInfo.lastName} name="lastName">
                            </ListItem>
                            <ListItem>
                                <span>{lang('profile.first_name')}:</span>
                                <input type="text" bind:value={userInfo.firstName} name="firstName">
                            </ListItem>
                            <ListItem>
                                <span>{lang('profile.middle_name')}:</span>
                                <input type="text" bind:value={userInfo.middleName} name="middleName">
                            </ListItem>
                            <ListItem>
                                <span>{lang('profile.birthday')}</span>
                                {#if userInfo.birthDate != null}
                                    <Input type="datepicker" name="dateOfBirth" placeholder="dd.mm.yyyy"
                                           calendarParams={{ dateFormat: 'yyyy-mm-dd',value: [new Date(userInfo.birthDate.split('T')[0].split('-'))] }}/>
                                {:else}
                                    <Input type="datepicker" name="dateOfBirth" placeholder="dd.mm.yyyy"
                                           calendarParams={{ dateFormat: 'yyyy-mm-dd' }}/>
                                {/if}
                            </ListItem>
                        {/if}
                        <ListItem>
                            <span>{lang('profile.country_city')}:</span>
                            <select name="countryId" bind:value={userInfo.countryId} on:change={getCities}>
                                {#if countries != null}
                                    {#each countries as country}
                                        <option value={country.id}>{country.name}</option>
                                    {/each}
                                {/if}
                            </select>
                            <select name="cityId" bind:value={userInfo.cityId}>
                                {#if cities != null}
                                    {#each cities as city}
                                        <option value={city.id}>{city.name}</option>
                                    {/each}
                                {/if}
                            </select>
                        </ListItem>
                    </List>

                    <div class="validation_error">{errors}</div>

                    <div class="update_user_profile">
                        <Button type="submit" round class="update_user_profile_button">{lang('profile.save')}</Button>
                    </div>
                </form>
            </div>
        </div>
    </Page>
</Popup>

<div on:click="{toggleHeader}" class="{status === true ? 'open user_details' : 'user_details'}">
    {#if logo != null}
        <div class="user_image" style="background-image: url({logo})">
            <Icon f7="camera_rotate" size="35px" color="orange"/>
        </div>
    {/if}
    <Button popupOpen=".edit_profile_modal" class="edit_profile" on:click="{toggleHeader}">
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none"
             viewBox="0 0 645 645" width="20" height="20">
            <path xmlns:default="http://www.w3.org/2000/svg"
                  d="M539.3 0L0 539.3v105.2h105.2l539.3-539.3L539.3 0zm68.4 105.2l-63.1 63.1-68.4-68.3 63.1-63.1 68.4 68.3zm-513 513.1H26.3v-68.4L457.8 121l68.4 68.4L94.7 618.3z"
                  vector-effect="non-scaling-stroke" fill="#fff"/>
        </svg>
    </Button>
    {#if userInfo.isOrganizationUser}
        <p class="name">{userInfo.organizationName}</p>
    {:else}
        <p class="name">{userInfo.fullName}</p>
    {/if}
    {#if userInfo.city}
        <p class="country">{userInfo.country}, {userInfo.city}</p>
    {/if}

    <div class="user_ratings">
        <Block>
            <p>{lang('profile.customer_rating')}:</p>
            <div class="rate_details">
                <div class="rate">{userInfo.ordererRating}</div>
                <Icon f7="star_fill" size="16px" color="black"/>
                <div class="status">{userInfo.ordererLevelName}</div>
            </div>
        </Block>
        <Block>
            <p>{lang('profile.transporter_rating')}:</p>
            <div class="rate_details">
                <div class="rate">{userInfo.transporterRating}</div>
                <Icon f7="star_fill" size="16px" color="black"/>
                <div class="status">{userInfo.transporterLevelName}</div>
            </div>
        </Block>
    </div>

    <div class="user_more_info">
        <List>
            {#if userInfo.phoneNumber != null}
                <ListItem>
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none"
                         viewBox="0 0 44 44" width="20" height="20">
                        <path d="M43.8 33.4L37.5 27c-1.1-1.1-3.1-1.1-4.2 0l-2.8 2.8c-1.1 1.1-3.1 1.1-4.2 0L14.8 18.5c-1.2-1.2-1.2-3.1 0-4.2l2.8-2.8c.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1L11.2.9C10.1-.2 8.1-.2 7 .9L4.2 3.7l-.1.1c-.2 0-.6.3-.8.8-3.6 3.8-4.3 8.5-1.9 14 1.8 4.1 5.2 8.7 10.6 14 8.2 8.2 14.6 12 20.2 12 2.9 0 5.6-1.1 7.9-3.3.5-.2.7-.6.8-.8 0-.1.1-.1.1-.1l2.8-2.8c1.2-1.2 1.2-3.1 0-4.2zM8.5 2.3c.4-.4 1-.4 1.4 0l6.4 6.4c.2.2.3.4.3.7s-.1.5-.3.7l-2.1 2.1-7.9-7.8 2.2-2.1zm4.9 29c-5.2-5.2-8.5-9.6-10.2-13.4C1.1 13 1.7 9 4.9 5.8l7.8 7.9c-1.3 1.9-1.1 4.6.6 6.3l11.3 11.3c.9.9 2.2 1.5 3.5 1.5 1 0 1.9-.3 2.8-.8l7.9 7.8c-2 2-4.2 2.9-6.7 2.9-4.9 0-11-3.8-18.7-11.4zm29 4.9l-2.1 2.1-7.8-7.8 2.1-2.1c.4-.4 1-.4 1.4 0l6.4 6.4c.4.4.4 1 0 1.4z"
                              vector-effect="non-scaling-stroke" fill="#ffba2b"
                              xmlns:default="http://www.w3.org/2000/svg"/>
                    </svg>
                    <p>{userInfo.phoneNumber}</p>
                </ListItem>
            {/if}
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
                <p>{userInfo.email}</p>
            </ListItem>
            {#if userInfo.isOrganizationUser}
                {#if userInfo.payerAccountNumber}
                    <ListItem>
                        <span>{lang('profile.unp')}</span>
                        <p>{userInfo.payerAccountNumber}</p>
                    </ListItem>
                {/if}
                {#if userInfo.organizationAddress}
                    <ListItem>
                        <span>{lang('profile.organisation_address')}</span>
                        <p>{userInfo.organizationAddress}</p>
                    </ListItem>
                {/if}
            {:else}
                {#if userInfo.birthDate}
                    <ListItem>
                        <span>{lang('profile.birthday')}</span>
                        <p>{userInfo.birthDate.split('T')[0]}</p>
                    </ListItem>
                {/if}
            {/if}
        </List>

        <div class="user_more_logout">
            <Button href="/login/" on:click={logout}>{lang('profile.logout')}</Button>
        </div>
    </div>
</div>

<script>
    import {Page, Popup, Navbar, NavLeft, Block, Icon, Button, List, ListItem, Input, Link} from 'framework7-svelte';
    import {api, lang, user} from '@/js/api'

    let files;
    let errors = '';
    let userInfo;
    let logo;
    let status = false;
    let countries;
    let cities;

    user.subscribe(value => {
        userInfo = value;
        logo = userInfo.logoUrl + localStorage.getItem("token");
    });

    function updateProfile(event) {
        const formData = new FormData(event.target)
        const formUser = {}
        for (const [k, v] of formData.entries()) {
            formUser[k] = v
        }
        formUser['countryId'] = parseInt(formUser['countryId']);
        if (formUser['cityId'] != null) {
            formUser['cityId'] = parseInt(formUser['cityId']);
        }

        api.put('users/api/mobile/Account/Edit', formUser)
                .then((response) => {
                    if (response.status === 400) {
                        errors = response.data.title;
                    } else {
                        errors = '';
                        api.get('users/api/mobile/Account/GetAccountInfo')
                                .then((response) => {
                                    user.update(value => response);
                                    user.subscribe(value => {
                                        userInfo = value;
                                    });
                                })
                    }
                })
    }

    let country_api
    if(localStorage.getItem("lang") != null){
        country_api = 'users/api/Locations/GetCountries?Language=' + localStorage.getItem("lang") + '&NameFIlter='
    }else {
        country_api = 'users/api/Locations/GetCountries?Language=' + 1 + '&NameFIlter='
    }
    api.get(country_api)
            .then((response) => {
                countries = response.items;
            });

    function getCities(e) {
        let city_api
        if(localStorage.getItem("lang") != null){
            city_api = 'users/api/Locations/GetCities?CountryId=' + e.target.value + '&Language=' + localStorage.getItem("lang") + '&NameFIlter=';
        }else {
            city_api = 'users/api/Locations/GetCities?CountryId=' + e.target.value + '&Language=' + 1 + '&NameFIlter=';
        }
        api.get(city_api)
                .then((response) => {
                    cities = response.items;
                });
    }

    function toggleHeader() {
        status = !status;
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = '';
    }
</script>