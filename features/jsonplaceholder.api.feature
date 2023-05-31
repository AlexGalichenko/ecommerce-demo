Feature: API

  Scenario: Get todo
    Given I create 'GET' request 'request'
    And I add 'https://jsonplaceholder.typicode.com/todos/1' url to '$request'
    And I send '$request' request and save response as 'response'
    And I parse '$response' body as json
    Then Response '$response' Status Code to be equal '200'
    And Response '$response' Status Message to be equal 'OK'
    Then Response '$response.payload' contains:
      | userId    |
      | id        |
      | title     |
      | completed |
    Then I expect '$response.payload.userId' to equal '1'
    Then I expect '$response.payload.id' to equal '1'
    Then I expect '$response.payload.title' to equal 'delectus aut autem'
    Then I expect '$response.payload.completed' to equal '$boolean("false")'

  Scenario: Create post
    Given I create 'POST' request 'request'
    And I add 'https://jsonplaceholder.typicode.com/posts' url to '$request'
    And I add body to '$request':
    """
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    """
    And I send '$request' request and save response as 'response'
    And I parse '$response' body as json
    Then I expect '$response.status' to be equal '201'
    And I expect '$response.statusText' to be equal 'Created'
