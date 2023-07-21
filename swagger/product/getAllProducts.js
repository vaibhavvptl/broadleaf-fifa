module.exports = {
    get: {
      tags: ['Product Operations'],
      description:
        'This API endpoint retrieves a list of all available Products in the Application.',
      oprationId: 'getAllProducts',
      
      responses: {
        200: {
            description: "List of products",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string"
                      },
                      name: {
                        type: "string"
                      },
                      uri: {
                        type: "string"
                      },
                      description: {
                        type: "string"
                      },
                      sku: {
                        type: "string"
                      },
                      currency: {
                        type: "string"
                      },
                      defaultPrice: {
                        type: "object",
                        properties: {
                          amount: {
                            type: "number"
                          },
                          currency: {
                            type: "string"
                          }
                        }
                      },
                      salePrice: {
                        type: "object",
                        properties: {
                          amount: {
                            type: "number"
                          },
                          currency: {
                            type: "string"
                          }
                        }
                      },
                      cost: {
                        type: "object",
                        properties: {
                          amount: {
                            type: "number"
                          },
                          currency: {
                            type: "string"
                          }
                        }
                      },
                      online: {
                        type: "boolean"
                      },
                      discountable: {
                        type: "boolean"
                      },
                      inventoryType: {
                        type: "string"
                      },
                      availableOnline: {
                        type: "boolean"
                      },
                      inventoryCheckStrategy: {
                        type: "string"
                      },
                      inventoryReservationStrategy: {
                        type: "string"
                      },
                      eligibleForPickup: {
                        type: "boolean"
                      },
                      fulfillmentFlatRates: {
                        type: "object"
                      },
                      activeStartDate: {
                        type: "string",
                        "format": "date-time"
                      },
                      searchable: {
                        type: "boolean"
                      },
                      individuallySold: {
                        type: "boolean"
                      },
                      merchandisingProduct: {
                        type: "boolean"
                      },
                      productType: {
                        type: "string"
                      },
                      keywords: {
                        type: "array",
                        items: {
                          type: "string"
                        }
                      },
                      attributes: {
                        type: "object",
                        properties: {
                          internalNotes: {
                            type: "object",
                            properties: {
                              value: {
                                type: "string"
                              },
                              nameLabel: {
                                type: "string"
                              }
                            }
                          },
                          shortDescription: {
                            type: "object",
                            properties: {
                              value: {
                                type: "string"
                              },
                              nameLabel: {
                                type: "string"
                              }
                            }
                          }
                        }
                      },
                      includedProducts: {
                        type: "array",
                        items: {
                          type: "string"
                        }
                      },
                      options: {
                        type: "array",
                        items: {
                          type: "string"
                        }
                      },
                      reviewsSummary: {
                        type: "object",
                        properties: {
                          numberOfReviews: {
                            type: "integer"
                          }
                        }
                      },
                      tags: {
                        type: "array",
                        items: {
                          type: "string"
                        }
                      },
                      contextState: {
                        type: "object",
                        properties: {
                          mutable: {
                            type: "boolean"
                          },
                          archived: {
                            type: "boolean"
                          },
                          fieldChanges: {
                            type: "array",
                            items: {
                              type: "string"
                            }
                          },
                          level: {
                            type: "integer"
                          },
                          catalog: {
                            type: "object",
                            properties: {
                              contextId: {
                                type: "string"
                              },
                              name: {
                                type: "string"
                              },
                              locale: {
                                type: "string"
                              },
                              level: {
                                type: "integer"
                              }
                            }
                          },
                          sandbox: {
                            type: "string"
                          },
                          application: {
                            type: "string"
                          },
                          tenant: {
                            type: "string"
                          },
                          customerContextId: {
                            type: "string"
                          },
                          baseCatalogId: {
                            "type": "string"
                          },
                          "overrideCatalogId": {
                            type: "string"
                          },
                          sandboxChangeType: {
                            type: "string"
                          }
                        }
                      },
                      embroideryAllowed: {
                        type: "boolean"
                      },
                      preorder: {
                        type: "boolean"
                      },
                      onSale: {
                        type: "boolean"
                      },
                      priceWithDependentItems: {
                        type: "object",
                        properties: {
                          amount: {
                            type: "number"
                          },
                          currency: {
                            type: "string"
                          }
                        }
                      },
                      active: {
                        type: "boolean"
                      }
                    }
                  }
                }
              }
            }
          },
        403: {
          description:
            'Forbidden : The server understood the request, but the user or client does not have access to the requested resource.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/error',
              },
            },
          },
        },

        404: {
            description:
              'found: The requested resourse is not found.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/error',
                },
              },
            },
          },



        401: {
          description:
            'Unauthorized : client request has not been completed because it lacks valid authentication credentials for the requested resource.. ',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/error',
              },
            },
          },
        },
  
        500: {
          description:
            'Internal Server Error : The server encountered an error while processing the request.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/error',
              },
            },
          },
        },
    },
},
    };
    
    