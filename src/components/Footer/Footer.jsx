import React from "react";

export const Footer = () => {
  return (
    <div className="sc-igRZrG evctTZ">
      <div className="footer">
        <div className="footer__container container">
          <div className="footer__inner">
            <div className="footer__item footer__item--html">
              2022 ИП Тянгинский Роман Валерьевич
              <br />
              ИНН: 390606842160
              <br />
              ОГРНИП: 322784700063249
              <br />
              Тел.: +7 (916) 929-37-37
              <br />
              E-mail:{" "}
              <a href="mailto:support@tvoyfreelance.com">
                onlyfreelance.supp@mail.ru
              </a>
            </div>
            <div className="footer__item">
              <div className="footer__info footer__info--title footer__info--grey footer__info--ru">
                Платеж защищен
              </div>
              <div className="footer__pay">
                <img
                  className="footer__img"
                  alt=""
                  src="data:image/png;base64,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"
                  width="36px"
                  height="12px"
                />
                <img
                  className="footer__img"
                  alt=""
                  src="data:image/png;base64,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"
                  width="32px"
                  height="12px"
                />
                <img
                  className="footer__img"
                  alt=""
                  src="data:image/png;base64,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"
                  width="13px"
                  height="12px"
                />
                <img
                  className="footer__img"
                  alt=""
                  src="data:image/png;base64,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"
                  width="28px"
                  height="12px"
                />
              </div>
              <div className="footer__info footer__info--title footer__info--grey footer__info--ru">
                Принимаем к оплате:
              </div>
              <div className="footer__pay footer__pay--ru">
                <img
                  className="footer__img"
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAASCAMAAAA9mj1BAAABBVBMVEUAAAAAWKAAS5AAWKAAW6AAWKAAWKAAWKAAWKEAWJ8AWKAAWKAAV6IAV6AAWaMAW5gAWKEAWKAAWKD7phoAWKEAWaEAV6AAX6AAWKAAWKAAWKEAWKAAV6EAYKAAV6AAWKAAWKEAWKAAWKAAWKAAWaAAWaEAWKAAWKIAV6ICWKEAW6EAWKAAWKAAWaEAWJ8AWKAAWKEAWaESXZgAWKAAWaAAWKAAWKEAWKH6phr8pxoAWKAAWKEAV5/5pBv1pCEAXaLtoiD6pho/a4FVcnT7pRrfnij6phnioCf7qBv7pxr8pxtOcXX0phb/sRT/nRT/lRUAWKD7phkKWZ6Hglj3phueiUu5kjxkDdTXAAAAUHRSTlMArgPwEvftzYn96bkafSgH+uHCrlZLLwrSyKBwDAX05dzVqJiCdlM4Ih4XsKSNY0Q+Nf7ZtKubW+mZlGpAOSMP/fbl5c3GoJePd2ZIFw0NDMw8CW4AAAIbSURBVDjLRZJnY6JAEIZHQEWKKAdiwxYV0FhjTC71ei9rkrv//1My75KNzwemz84OS1/e5Hz/TRK3wDTI5G/bgCOb+Jau1+1JRMCYnDArqH9uv10ewFsCaVEIMTSMAYs6Jzt7OEBlhnjXl0abcu6+vuPST5o8FAGTqiUWNtHMFoq+h/hN3qmMZJB9+H84XP5CU3lag0JkLIjMGs4r7+yy5SPTawuJ5VCO5j88Pr2/ZW0K/z6mDiqW1K2zrF3fa/EsmSJzU8pLewm9YIrt49MPVkbsLt4QtRFek4NMfUMK7YrtJpzXyrUW4uEf7ym12NuKSGvhchkZsMVZoG7mYIqOrfYEutxo+/mvnLPW4e300T0mKghQ263y4mWFh2qY2FNX1WLQj3f3QxYDgyjpsXJK3APHgxF7ySizNvdC7KmhSpdsbX9ir5UxmxdYrEvIRlMwj3iJFVam5CAtUKUOcsdztMuwNmwrzEOb854AAUUtTMrHN+WfU0iv9TImoYeuRvKm9fydrGtIcl0Xpb6mSsfqua2QfIaHYVCM8PGJ7SEUfUOVrmCqFyZ/Z4soOFk7UexVy4gsM/1YiEW/XtbKPRcwGsV88oUoDW3bL8lTUhNCl6hMibcTYBDBCCpYGsW2eKUXGOjQTKrMBhe6IsVEAPeoB9QdCsUwpA7kQt5eG2FPpKgWmPOUQAd6Sloytge6Xmq2Q4/IRLxKkpD102c3MZIThBDywAAAAABJRU5ErkJggg=="
                  width="29px"
                  height="9px"
                />
                <img
                  className="footer__img"
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAASCAMAAACU7vXVAAABtlBMVEUAAADuGi3uGi78szD+tTH8szD8szH8szDsGy/8szHuGiz9szH8tjHuGTD/ozvtGy7uGy79szHuGy3vHTD8tDDtGS78szHsGy7sGS//sCr/qjnuJy79vEn8sjH4jjH2dy/uGy79tDD8szH8tDHuGy/8szHtHC3uHC38sjH9szD8tDH/tjPsGjDtGSzyHjDuGjD6sy/uHC3oFy78szHtGy7tGSz1ai/+6sX0aS/1Zi/8si7+7Mv+47P9xmP/9ub/8Nb6xMv6xcn6vML6ub/4q7L3lqH9vEn8uUDuKDr2cTD0Wi/97vD+6Oz94+X93eD7zdL7y8/+57/5qK7+4Kz3maL+3aH+15L1gY390or1fIj9y3D9yGnyVmTxSVj9v033fUj8tTb8tTX8tDP2dDPtIDL7pzH4izDyTS/wMS7uIS770dT8ztT6v8X5tLv5sbr+5bn8z7j5sLb+4a33oar4oKj3lZ73k5z6tpv3jJX5qo/90oLzanf4lnHzY3DyYG3yXmz4nWr3kGjxUF72hlbwP0/vPEzyUkbvNEb1b0HvLT72fj36njD5kTD0XjD0YC/xRS/uJi7xQC0YXtpPAAAAM3RSTlMA3/vvIf36+eblv4o4MQTswaysh2lgXEIoFQ316+vn5+bdysbDuLe1pnljUE9GOzs2LQsgKRO4AAABaElEQVQoz12S5XLCUBBGbyg1WiiU0lJ39waI4O7uri11d3fXN26AQDKcX3fm7Nyd3f1AkY7WAQajZUTAId7NE431dTVDbV2gDJslIoFmmDyYpLGd1PMNogrd/XCF2qaiFtK0KP/1SSuYKvgxmv6RSCTLVEFNJ9GcQelfDEXRFZiC6MAXFyhq8R+KYZgZxnFS470cwL3SvmwFcyZxznRxZ343Z7MhpSxthNOZTEoGMwF0aNNbPTqH3q7b21ap9DaVwmj0KvcViFKK4AsA0misWp/H6bOH1SdqrXP3UoYnZFLEHQrI/XAzYLmO1ZpN3frpkcsR3AgfnCUV3h03gvjPpdJAlAn48cen2Nt1LH5jun9O3j68oomoISKXG1IRuaGHA9giijWMmL9qPjBOK1i1WCxV+wGLEO2D/PcHbb+lC8010D7oo3TdJCgh5FbuO8scrS/fd7ooyXxARD5YgqVCPniDRD6GyXz8A6yub19xUVk5AAAAAElFTkSuQmCC"
                  width="19px"
                  height="11px"
                />
                <img
                  className="footer__img"
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAASCAMAAADbs/YFAAABEVBMVEUAAABNtF1Ns15LtV5Ns15Mtl9QsmBLtF1Ns11OtF5OtFtNtF5NuF0/sGRMtF1NtF5MtlsAsuVOtV4AtOdNtV4GmtVNt11Ns15NtV5NtV5OtV1MtF5Os11NtVxQt2BNtF4Eo9pNs15NtF9MtV5NtV8FmNdNtF5NtF4ApOBJtm0Hjs0AsuYGlNBNtF4AseQBquBNtV1LtFwAtedOtV4Cp+ACoN0Gj9JOt15OtF0CtOhKt1wInthQs15Ssl8AlMoHj8xOtF9NtF5LtV1NtF0AtOYIkM4As+cEndcAtOcAt+cAq+MFnNYAseVLtFwFjc5NtF4AtOYBruMCq+ACqN0DpdsEodkEntcFm9UGmdMGldEHks81okLXAAAAT3RSTlMA1e9H/VFgL/ZitfghA4zyDP641UQ6KNHDopp5PjMQ2dXJvaeVhYFaEgf88+Li1dWtqpuKhYWFcGxFOB0cFAn36OffzcW/trOqjYBqYjov1s3OHwAAAYtJREFUOMuN1NdyglAQgOFFMUaBQIwSe4yJLXZjb+m9bHp7/wfJHkDwiMn4X7AMc75h5lwsbAvUdvwBjNKJqMDyQXLXnNQ4JrDC0+stVq1Wr2cymau7IlDraKSGgdJCaLYGXg8NMcA+nqKRD26eWJvPL69v7x+fX5WI47HJfBKX+D7OfKTM+e9KxPE7EwDIL/ElwfZKi/c/F1PbS0kALbvEB9D2UDzn/dGj7TEPIHvcfnI256HY2pz3BxHHR0tQQLcviI6nlMFl2e2jVcSqDHF63eO9EqIRn3mFGg3ub9vtTieXy3W7I9MfkhJ9mkDXkOL9UKKrTVleboSooFM8bfkAHdv3i4hZmfNrMXr2/Zb3e5BLTCim39AF+k2TAd7HVMTj9B9eymtgeWUPjTw65432gfeiZKQKPeKWn119VHF5See9uOE1GqYBHC+fICsBLh+DBR8AO8crQTbVlMur/pU89NgUSi4fhNV8SjWuatGr4f+9uT8SAFqD1ggdHnP7I+sFSjf3B+izneL0CxL3v6zC3XU9AAAAAElFTkSuQmCC"
                  width="32px"
                  height="9px"
                />
              </div>
            </div>
            <div className="footer__item footer__item--ru">
              <a
                href="https://freelancers-school.ru/policy.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="footer__info footer__info--link footer__info--link-ru"
              >
                Политика конфиденциальности
              </a>
              <a
                href="https://freelancers-school.ru/offer.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="footer__info footer__info--link footer__info--link-ru"
              >
                Оферта
              </a>
              <a
                className="footer__info footer__info--link footer__info--link-ru"
                href="/unsubscribe"
              >
                Отменить подписку
              </a>
              <a
                href="https://freelancers-school.ru/permission.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="footer__info footer__info--link footer__info--link-ru"
              >
                Политика обработки данных
              </a>
              <a
                href="https://freelancers-school.ru/tariff.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="footer__info footer__info--link footer__info--link-ru"
              >
                Тариф
              </a>
              <a
                className="footer__info footer__info--link footer__info--link-ru"
                href="/refund"
              >
                Возврат средств
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
