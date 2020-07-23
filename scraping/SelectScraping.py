# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome('./chromedriver')
driver.get('http://luris.molit.go.kr/web/index.jsp')

element = Select(driver.find_element_by_xpath(
    '//*[@id="gnb_tab11"]/div/div[2]/div/div[1]/ul/li[1]/select'))
element2 = Select(driver.find_element_by_xpath(
    '//*[@id="gnb_tab11"]/div/div[2]/div/div[1]/ul/li[2]/select'))
element3 = Select(driver.find_element_by_xpath(
    '//*[@id="gnb_tab11"]/div/div[2]/div/div[1]/ul/li[3]/select'))
element4 = Select(driver.find_element_by_xpath(
    '//*[@id="gnb_tab11"]/div/div[2]/div/div[1]/ul/li[4]/select'))
element5 = driver.find_element_by_xpath(
    '//*[@id="gnb_tab11"]/div/div[2]/div/div[1]/ul/li[2]/input')
element6 = driver.find_element_by_xpath(
    '//*[@id="gnb_tab11"]/div/div[2]/div/div[1]/ul/li[4]/input')
button = driver.find_element_by_xpath(
    '//*[@id="gnb_tab11"]/div/div[2]/div/div[3]/button')

element.select_by_visible_text('경기도')
element
element5.send_keys('1')